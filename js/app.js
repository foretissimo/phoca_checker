/**
 * Phoca Checker - Main Application Logic
 */
class PhocaCheckerApp {
  constructor() {
    this.templates = window.PRESET_TEMPLATES || [];
    this.currentTemplateId = this.templates[0]?.id || '';
    this.currentTemplate = this.templates[0] || null;
    
    // Checked card IDs per template: Map<templateId, Set<cardId>>
    this.checkedCards = new Set();
    
    // Display Mode: 'hide-owned' (기본: 보유 포카 회색 마스킹) | 'hide-unowned' (미보유 포카 회색 마스킹)
    this.displayMode = 'hide-owned';
    
    // Overlay opacity / color
    this.overlayOpacity = 0.65;
    
    this.initElements();
    this.loadSavedState();
    this.bindEvents();
    
    // Initialize Template Editor
    this.editor = new TemplateEditor(this);
    
    // Initial Render
    this.renderTemplateSelector();
    this.loadTemplate(this.currentTemplateId);
  }

  initElements() {
    this.templateSelect = document.getElementById('template-select');
    this.imageUploadInput = document.getElementById('custom-image-upload');
    this.mainImage = document.getElementById('main-sheet-image');
    this.imageWrapper = document.getElementById('image-wrapper');
    this.cardOverlayContainer = document.getElementById('card-overlay-container');
    
    // Mode toggles
    this.modeHideOwnedBtn = document.getElementById('mode-hide-owned');
    this.modeHideUnownedBtn = document.getElementById('mode-hide-unowned');
    
    // Bulk actions
    this.btnSelectAll = document.getElementById('btn-select-all');
    this.btnDeselectAll = document.getElementById('btn-deselect-all');
    this.btnInvertSelection = document.getElementById('btn-invert-selection');
    
    // Export button
    this.btnExportPng = document.getElementById('btn-export-png');
    
    // Stats
    this.statCount = document.getElementById('stat-count');
    this.statPercent = document.getElementById('stat-percent');
    this.progressBar = document.getElementById('progress-bar-fill');
    
    // Toasts
    this.toastContainer = document.getElementById('toast-container');
  }

  bindEvents() {
    // Template selection change
    if (this.templateSelect) {
      this.templateSelect.addEventListener('change', (e) => {
        this.loadTemplate(e.target.value);
      });
    }

    // Custom image upload
    if (this.imageUploadInput) {
      this.imageUploadInput.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) this.handleCustomImageUpload(file);
      });
    }

    // Display Mode toggle
    if (this.modeHideOwnedBtn) {
      this.modeHideOwnedBtn.addEventListener('click', () => {
        this.setDisplayMode('hide-owned');
      });
    }
    if (this.modeHideUnownedBtn) {
      this.modeHideUnownedBtn.addEventListener('click', () => {
        this.setDisplayMode('hide-unowned');
      });
    }

    // Bulk actions
    if (this.btnSelectAll) {
      this.btnSelectAll.addEventListener('click', () => this.selectAllCards());
    }
    if (this.btnDeselectAll) {
      this.btnDeselectAll.addEventListener('click', () => this.deselectAllCards());
    }
    if (this.btnInvertSelection) {
      this.btnInvertSelection.addEventListener('click', () => this.invertSelection());
    }

    // Export PNG
    if (this.btnExportPng) {
      this.btnExportPng.addEventListener('click', () => this.exportImage());
    }

    // Window resize handler for overlay synchronization
    window.addEventListener('resize', () => {
      if (this.editor && this.editor.active) {
        this.editor.renderEditorOverlay();
      }
    });
  }

  loadSavedState() {
    try {
      const savedMode = localStorage.getItem('phoca_display_mode');
      if (savedMode) this.displayMode = savedMode;
      
      const savedTemplateId = localStorage.getItem('phoca_current_template');
      if (savedTemplateId && this.templates.find(t => t.id === savedTemplateId)) {
        this.currentTemplateId = savedTemplateId;
      }
    } catch (e) {
      console.warn('LocalStorage access error:', e);
    }
  }

  saveCheckedState() {
    if (!this.currentTemplate) return;
    try {
      const key = `phoca_checks_${this.currentTemplate.id}`;
      localStorage.setItem(key, JSON.stringify(Array.from(this.checkedCards)));
      localStorage.setItem('phoca_display_mode', this.displayMode);
      localStorage.setItem('phoca_current_template', this.currentTemplate.id);
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  loadCheckedStateForCurrent() {
    this.checkedCards.clear();
    if (!this.currentTemplate) return;
    try {
      const key = `phoca_checks_${this.currentTemplate.id}`;
      const saved = localStorage.getItem(key);
      if (saved) {
        const arr = JSON.parse(saved);
        arr.forEach(id => this.checkedCards.add(id));
      }
    } catch (e) {
      console.warn('LocalStorage load error:', e);
    }
  }

  renderTemplateSelector() {
    if (!this.templateSelect) return;
    this.templateSelect.innerHTML = '';
    this.templates.forEach((t) => {
      const option = document.createElement('option');
      option.value = t.id;
      option.textContent = t.title;
      if (t.id === this.currentTemplateId) option.selected = true;
      this.templateSelect.appendChild(option);
    });
  }

  loadTemplate(templateId) {
    const template = this.templates.find(t => t.id === templateId);
    if (!template) return;

    this.currentTemplate = template;
    this.currentTemplateId = templateId;
    this.loadCheckedStateForCurrent();

    if (this.templateSelect) {
      this.templateSelect.value = templateId;
    }

    // Set image source
    if (this.mainImage) {
      this.mainImage.src = template.image;
      this.mainImage.onload = () => {
        this.renderCards();
        this.updateStats();
        if (this.editor && this.editor.active) {
          this.editor.setEditorActive(true);
        }
      };
    }

    this.updateModeButtonsUI();
  }

  setDisplayMode(mode) {
    this.displayMode = mode;
    this.updateModeButtonsUI();
    this.renderCards();
    this.saveCheckedState();
    
    const modeLabel = mode === 'hide-owned' ? '보유 포카 가리기 (미보유 강조)' : '미보유 포카 가리기 (보유 강조)';
    this.showToast(`표시 모드: ${modeLabel}`);
  }

  updateModeButtonsUI() {
    if (this.modeHideOwnedBtn && this.modeHideUnownedBtn) {
      if (this.displayMode === 'hide-owned') {
        this.modeHideOwnedBtn.classList.add('active');
        this.modeHideUnownedBtn.classList.remove('active');
      } else {
        this.modeHideOwnedBtn.classList.remove('active');
        this.modeHideUnownedBtn.classList.add('active');
      }
    }
  }

  toggleCard(cardId) {
    if (this.checkedCards.has(cardId)) {
      this.checkedCards.delete(cardId);
    } else {
      this.checkedCards.add(cardId);
    }
    this.saveCheckedState();
    this.renderCards();
    this.updateStats();
  }

  selectAllCards() {
    if (!this.currentTemplate) return;
    this.currentTemplate.cards.forEach(c => this.checkedCards.add(c.id));
    this.saveCheckedState();
    this.renderCards();
    this.updateStats();
    this.showToast('모든 포토카드가 선택되었습니다.');
  }

  deselectAllCards() {
    this.checkedCards.clear();
    this.saveCheckedState();
    this.renderCards();
    this.updateStats();
    this.showToast('모든 선택이 해제되었습니다.');
  }

  invertSelection() {
    if (!this.currentTemplate) return;
    this.currentTemplate.cards.forEach(c => {
      if (this.checkedCards.has(c.id)) {
        this.checkedCards.delete(c.id);
      } else {
        this.checkedCards.add(c.id);
      }
    });
    this.saveCheckedState();
    this.renderCards();
    this.updateStats();
    this.showToast('선택 상태가 반전되었습니다.');
  }

  renderCards() {
    if (this.editor && this.editor.active) {
      this.editor.renderEditorOverlay();
      return;
    }

    if (!this.cardOverlayContainer || !this.currentTemplate) return;
    this.cardOverlayContainer.innerHTML = '';

    const cards = this.currentTemplate.cards || [];

    cards.forEach((card) => {
      const isChecked = this.checkedCards.has(card.id);
      
      // Determine if overlay should be visible
      // 'hide-owned': Checked card gets grey overlay
      // 'hide-unowned': Unchecked card gets grey overlay
      const isMasked = this.displayMode === 'hide-owned' ? isChecked : !isChecked;

      const cardEl = document.createElement('div');
      cardEl.className = 'photocard-slot' + (isMasked ? ' masked' : '') + (isChecked ? ' checked' : '');
      cardEl.style.left = `${card.x}%`;
      cardEl.style.top = `${card.y}%`;
      cardEl.style.width = `${card.w}%`;
      cardEl.style.height = `${card.h}%`;
      cardEl.style.borderRadius = `${card.radius || 12}px`;
      cardEl.title = `${card.name || '포토카드'} (${isChecked ? '보유' : '미보유'}) - 클릭하여 변경`;

      // Inner overlay container with badge/icon
      cardEl.innerHTML = `
        <div class="card-mask" style="border-radius: inherit;">
          <div class="mask-indicator">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
      `;

      cardEl.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleCard(card.id);
      });

      this.cardOverlayContainer.appendChild(cardEl);
    });
  }

  updateStats() {
    if (!this.currentTemplate) return;
    const total = this.currentTemplate.cards.length;
    const owned = this.checkedCards.size;
    const percent = total > 0 ? Math.round((owned / total) * 100) : 0;

    if (this.statCount) {
      this.statCount.textContent = `${owned} / ${total} 장`;
    }
    if (this.statPercent) {
      this.statPercent.textContent = `(${percent}%)`;
    }
    if (this.progressBar) {
      this.progressBar.style.width = `${percent}%`;
    }
  }

  async exportImage() {
    if (!this.currentTemplate || !this.mainImage) return;

    try {
      if (this.btnExportPng) {
        this.btnExportPng.classList.add('loading');
        this.btnExportPng.innerHTML = `
          <svg class="spin" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-dasharray="30" stroke-dashoffset="10"></circle>
          </svg> 이미지 생성 중...
        `;
      }

      const filename = `포카체커_${this.currentTemplate.title.replace(/\s+/g, '_')}_${this.displayMode === 'hide-owned' ? '미보유위시' : '보유완성'}.png`;

      await CanvasExporter.exportToPng({
        imageElement: this.mainImage,
        cards: this.currentTemplate.cards,
        checkedCardIds: this.checkedCards,
        displayMode: this.displayMode,
        overlayColor: `rgba(20, 20, 24, ${this.overlayOpacity})`,
        filename: filename
      });

      this.showToast('고해상도 이미지가 다운로드되었습니다! 🎉');
    } catch (err) {
      console.error('Export error:', err);
      this.showToast('이미지 내보내기 중 오류가 발생했습니다.');
    } finally {
      if (this.btnExportPng) {
        this.btnExportPng.classList.remove('loading');
        this.btnExportPng.innerHTML = `
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          이미지 다운로드 (PNG)
        `;
      }
    }
  }

  handleCustomImageUpload(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      const customId = 'custom_' + Date.now();
      const customTemplate = {
        id: customId,
        title: file.name.replace(/\.[^/.]+$/, "") || '내 포토카드 판',
        category: '사용자 정의',
        image: dataUrl,
        cards: []
      };

      this.templates.push(customTemplate);
      this.renderTemplateSelector();
      this.loadTemplate(customId);
      this.showToast('이미지가 업로드되었습니다. [영역 편집기]를 열어 카드 위치를 설정하세요!');
      
      // Auto open editor
      setTimeout(() => {
        if (this.editor) this.editor.setEditorActive(true);
      }, 500);
    };
    reader.readAsDataURL(file);
  }

  showToast(message, duration = 2500) {
    if (!this.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
}

// Bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new PhocaCheckerApp();
});
