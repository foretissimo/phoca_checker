/**
 * Canvas Export Utility for High-Resolution Photocard Checklist
 */
class CanvasExporter {
  /**
   * Render the high-resolution composite canvas and download as PNG
   * @param {Object} options
   * @param {HTMLImageElement} options.imageElement
   * @param {Array} options.cards
   * @param {Set} options.checkedCardIds
   * @param {string} options.displayMode 'hide-owned' | 'hide-unowned'
   * @param {string} options.overlayColor rgba string
   * @param {string} options.filename
   * @param {boolean} options.showCheckIcon
   */
  static async exportToPng({
    imageElement,
    cards,
    checkedCardIds,
    displayMode = 'hide-owned',
    overlayColor = 'rgba(25, 25, 28, 0.65)',
    filename = 'photocard_checklist.png',
    showCheckIcon = false,
  }) {
    if (!imageElement || !imageElement.complete) {
      throw new Error('Image is not ready for export');
    }

    const naturalWidth = imageElement.naturalWidth || imageElement.width;
    const naturalHeight = imageElement.naturalHeight || imageElement.height;

    const canvas = document.createElement('canvas');
    canvas.width = naturalWidth;
    canvas.height = naturalHeight;
    const ctx = canvas.getContext('2d');

    // 1. Draw base original image at native resolution
    ctx.drawImage(imageElement, 0, 0, naturalWidth, naturalHeight);

    // 2. Draw card overlays
    cards.forEach((card) => {
      const isChecked = checkedCardIds.has(card.id);
      
      // Determine if this card should have grey overlay based on mode
      let shouldMask = false;
      if (displayMode === 'hide-owned') {
        // Mode A: Checked (owned) -> greyed out (shows unowned)
        shouldMask = isChecked;
      } else {
        // Mode B: Unchecked (not owned) -> greyed out (shows owned)
        shouldMask = !isChecked;
      }

      if (shouldMask) {
        const x = (card.x / 100) * naturalWidth;
        const y = (card.y / 100) * naturalHeight;
        const w = (card.w / 100) * naturalWidth;
        const h = (card.h / 100) * naturalHeight;

        // Scale radius proportional to image width
        const baseWidthRef = 1200;
        const radius = Math.max(4, Math.round(((card.radius || 12) * naturalWidth) / baseWidthRef));

        ctx.save();
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(x, y, w, h, radius);
        } else {
          CanvasExporter.drawRoundRectPath(ctx, x, y, w, h, radius);
        }
        ctx.closePath();
        ctx.fillStyle = overlayColor;
        ctx.fill();

        // Optional subtle border on masked card
        ctx.lineWidth = Math.max(1, Math.round(naturalWidth / 800));
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.stroke();

        ctx.restore();
      }
    });

    // 3. Trigger Download
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          resolve(false);
          return;
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        resolve(true);
      }, 'image/png');
    });
  }

  static drawRoundRectPath(ctx, x, y, width, height, radius) {
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  }
}

if (typeof window !== 'undefined') {
  window.CanvasExporter = CanvasExporter;
}
