/**
 * Visual Template & Card Region Editor
 * Enables instant grid generation and drag/drop bounding box tuning for new images
 */
class TemplateEditor {
  constructor(app) {
    this.app = app;
    this.active = false;
    this.customCards = [];
    this.selectedCardId = null;
    this.isDragging = false;
    this.isResizing = false;
    this.dragStart = { x: 0, y: 0 };
    this.initElements();
    this.bindEvents();
  }

  initElements() {
    this.editorDrawer = document.getElementById('editor-drawer');
    this.toggleBtn = document.getElementById('toggle-editor-btn');
    this.closeBtn = document.getElementById('close-editor-btn');
    
    // Grid generator inputs
    this.gridRowsInput = document.getElementById('grid-rows');
    this.gridColsInput = document.getElementById('grid-cols');
    this.gridStartXInput = document.getElementById('grid-start-x');
    this.gridStartYInput = document.getElementById('grid-start-y');
    this.gridCardWInput = document.getElementById('grid-card-w');
    this.gridCardHInput = document.getElementById('grid-card-h');
    this.gridGapXInput = document.getElementById('grid-gap-x');
    this.gridGapYInput = document.getElementById('grid-gap-y');
    this.gridRadiusInput = document.getElementById('grid-radius');
    
    this.generateGridBtn = document.getElementById('btn-generate-grid');
    this.addBoxBtn = document.getElementById('btn-add-box');
    this.deleteBoxBtn = document.getElementById('btn-delete-box');
    this.clearAllBtn = document.getElementById('btn-clear-boxes');
    
    this.jsonOutput = document.getElementById('editor-json-output');
    this.copyJsonBtn = document.getElementById('btn-copy-json');
    this.applyJsonBtn = document.getElementById('btn-apply-template');
    this.templateTitleInput = document.getElementById('editor-template-title');
  }

  bindEvents() {
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggleEditor());
    }
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.setEditorActive(false));
    }
    if (this.generateGridBtn) {
      this.generateGridBtn.addEventListener('click', () => this.generateGrid());
    }
    if (this.addBoxBtn) {
      this.addBoxBtn.addEventListener('click', () => this.addNewBox());
    }
    if (this.deleteBoxBtn) {
      this.deleteBoxBtn.addEventListener('click', () => this.deleteSelectedBox());
    }
    if (this.clearAllBtn) {
      this.clearAllBtn.addEventListener('click', () => this.clearAllBoxes());
    }
    if (this.copyJsonBtn) {
      this.copyJsonBtn.addEventListener('click', () => this.copyJson());
    }
    if (this.applyJsonBtn) {
      this.applyJsonBtn.addEventListener('click', () => this.applyToCurrentSession());
    }

    // Grid live preview on input change
    const inputs = [
      this.gridRowsInput, this.gridColsInput, this.gridStartXInput,
      this.gridStartYInput, this.gridCardWInput, this.gridCardHInput,
      this.gridGapXInput, this.gridGapYInput, this.gridRadiusInput
    ];
    inputs.forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          if (this.active) this.generateGrid(true); // silent preview
        });
      }
    });
  }

  toggleEditor() {
    this.setEditorActive(!this.active);
  }

  setEditorActive(active) {
    this.active = active;
    if (this.editorDrawer) {
      this.editorDrawer.classList.toggle('active', active);
    }
    if (this.toggleBtn) {
      this.toggleBtn.classList.toggle('active-mode', active);
    }

    if (active) {
      // Sync with current template cards
      if (this.app.currentTemplate) {
        this.customCards = JSON.parse(JSON.stringify(this.app.currentTemplate.cards || []));
        if (this.templateTitleInput) {
          this.templateTitleInput.value = this.app.currentTemplate.title || '새 템플릿';
        }
      }
      this.updateJsonOutput();
      this.renderEditorOverlay();
    } else {
      this.app.renderCards();
    }
  }

  generateGrid(isLiveInput = false) {
    const rows = parseInt(this.gridRowsInput.value) || 1;
    const cols = parseInt(this.gridColsInput.value) || 4;
    const startX = parseFloat(this.gridStartXInput.value) || 7.9;
    const startY = parseFloat(this.gridStartYInput.value) || 49.0;
    const cardW = parseFloat(this.gridCardWInput.value) || 18.5;
    const cardH = parseFloat(this.gridCardHInput.value) || 42.5;
    const gapX = parseFloat(this.gridGapXInput.value) || 3.5;
    const gapY = parseFloat(this.gridGapYInput.value) || 4.0;
    const radius = parseInt(this.gridRadiusInput.value) || 12;

    const newCards = [];
    let count = 1;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = startX + c * (cardW + gapX);
        const y = startY + r * (cardH + gapY);
        newCards.push({
          id: `card_${count}`,
          name: `포카 ${count}`,
          section: rows > 1 ? `줄 ${r + 1}` : '기본',
          x: parseFloat(x.toFixed(2)),
          y: parseFloat(y.toFixed(2)),
          w: parseFloat(cardW.toFixed(2)),
          h: parseFloat(cardH.toFixed(2)),
          radius: radius
        });
        count++;
      }
    }

    this.customCards = newCards;
    this.updateJsonOutput();
    this.renderEditorOverlay();
    if (!isLiveInput) {
      this.app.showToast(`${newCards.length}개의 카드 영역 그리드가 생성되었습니다!`);
    }
  }

  addNewBox() {
    const count = this.customCards.length + 1;
    this.customCards.push({
      id: `custom_card_${count}`,
      name: `포카 ${count}`,
      section: '기본',
      x: 10,
      y: 10,
      w: 18.5,
      h: 40.0,
      radius: 12
    });
    this.selectedCardId = `custom_card_${count}`;
    this.updateJsonOutput();
    this.renderEditorOverlay();
  }

  deleteSelectedBox() {
    if (!this.selectedCardId) {
      if (this.customCards.length > 0) {
        this.customCards.pop();
      }
    } else {
      this.customCards = this.customCards.filter(c => c.id !== this.selectedCardId);
      this.selectedCardId = null;
    }
    this.updateJsonOutput();
    this.renderEditorOverlay();
  }

  clearAllBoxes() {
    if (confirm('모든 카드 영역을 초기화하시겠습니까?')) {
      this.customCards = [];
      this.selectedCardId = null;
      this.updateJsonOutput();
      this.renderEditorOverlay();
    }
  }

  updateJsonOutput() {
    if (!this.jsonOutput) return;
    const templateData = {
      id: this.app.currentTemplate?.id || 'custom_template_' + Date.now(),
      title: this.templateTitleInput?.value || '새 템플릿',
      image: this.app.currentTemplate?.image || '',
      cards: this.customCards
    };
    this.jsonOutput.value = JSON.stringify(templateData, null, 2);
  }

  copyJson() {
    this.updateJsonOutput();
    if (navigator.clipboard && this.jsonOutput) {
      navigator.clipboard.writeText(this.jsonOutput.value);
      this.app.showToast('JSON 설정이 클립보드에 복사되었습니다! templates.js에 붙여넣을 수 있습니다.');
    }
  }

  applyToCurrentSession() {
    if (!this.app.currentTemplate) return;
    this.app.currentTemplate.cards = JSON.parse(JSON.stringify(this.customCards));
    this.app.currentTemplate.title = this.templateTitleInput?.value || this.app.currentTemplate.title;
    this.app.showToast('현재 세션에 카드 영역이 적용되었습니다!');
    this.setEditorActive(false);
  }

  renderEditorOverlay() {
    if (!this.active) return;
    const container = document.getElementById('card-overlay-container');
    if (!container) return;

    container.innerHTML = '';

    this.customCards.forEach((card, index) => {
      const box = document.createElement('div');
      box.className = 'editor-card-box' + (this.selectedCardId === card.id ? ' selected' : '');
      box.style.left = `${card.x}%`;
      box.style.top = `${card.y}%`;
      box.style.width = `${card.w}%`;
      box.style.height = `${card.h}%`;
      box.style.borderRadius = `${card.radius || 10}px`;

      box.innerHTML = `
        <span class="editor-badge">#${index + 1}</span>
        <div class="resize-handle se"></div>
      `;

      // Select box
      box.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectedCardId = card.id;
        this.renderEditorOverlay();
      });

      // Simple mouse drag to move
      this.attachDragEvents(box, card, container);

      container.appendChild(box);
    });
  }

  attachDragEvents(box, card, container) {
    let startMouseX = 0, startMouseY = 0;
    let startCardX = 0, startCardY = 0;
    let startCardW = 0, startCardH = 0;
    let isResizing = false;

    const onMouseDown = (e) => {
      e.stopPropagation();
      const rect = container.getBoundingClientRect();
      startMouseX = e.clientX;
      startMouseY = e.clientY;
      startCardX = card.x;
      startCardY = card.y;
      startCardW = card.w;
      startCardH = card.h;

      if (e.target.classList.contains('resize-handle')) {
        isResizing = true;
      } else {
        isResizing = false;
      }

      this.selectedCardId = card.id;

      const onMouseMove = (moveEvent) => {
        const deltaXPercent = ((moveEvent.clientX - startMouseX) / rect.width) * 100;
        const deltaYPercent = ((moveEvent.clientY - startMouseY) / rect.height) * 100;

        if (isResizing) {
          card.w = Math.max(3, parseFloat((startCardW + deltaXPercent).toFixed(2)));
          card.h = Math.max(3, parseFloat((startCardH + deltaYPercent).toFixed(2)));
        } else {
          card.x = Math.max(0, Math.min(100 - card.w, parseFloat((startCardX + deltaXPercent).toFixed(2))));
          card.y = Math.max(0, Math.min(100 - card.h, parseFloat((startCardY + deltaYPercent).toFixed(2))));
        }

        box.style.left = `${card.x}%`;
        box.style.top = `${card.y}%`;
        box.style.width = `${card.w}%`;
        box.style.height = `${card.h}%`;
        this.updateJsonOutput();
      };

      const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        this.renderEditorOverlay();
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    };

    box.addEventListener('mousedown', onMouseDown);
  }
}

if (typeof window !== 'undefined') {
  window.TemplateEditor = TemplateEditor;
}
