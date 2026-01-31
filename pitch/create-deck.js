const pptxgen = require('pptxgenjs');
const path = require('path');

async function createPitchDeck() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'GRR';
    pptx.title = 'GRR Pitch Deck';
    pptx.subject = 'Gather. Rest. Rise.';

    // Brand colors (no # prefix for pptxgenjs)
    const ORANGE = 'C2561C';
    const CREAM = 'F5F2EB';
    const BLACK = '1A1A1A';

    const brandDir = path.join(__dirname, '..', 'brand');

    // ============ SLIDE 1: Title (Logo + ILM/ATX Hero) ============
    // Using proper 1:1 aspect for square hero image
    let slide = pptx.addSlide();
    slide.background = { color: CREAM };

    // Hero image - maintain square aspect ratio (image is 1024x1024)
    slide.addImage({
        path: path.join(brandDir, 'logos/title_hero.png'),
        x: 2.5, y: 0.4, w: 5, h: 5,  // Square aspect ratio
        sizing: { type: 'contain', w: 5, h: 5 }
    });

    // ============ SLIDE 2: Brand Story ============
    slide = pptx.addSlide();
    slide.background = { color: BLACK };

    // Orange right panel (40% width)
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: 6, y: 0, w: 4, h: 5.63,
        fill: { color: ORANGE }
    });

    // Hero on right - maintain aspect
    slide.addImage({
        path: path.join(brandDir, 'logos/title_hero.png'),
        x: 6.25, y: 1.1, w: 3.5, h: 3.5  // Square
    });

    slide.addText('The Brand Story', {
        x: 0.5, y: 0.4, w: 5, h: 0.6,
        fontSize: 36, bold: true, color: ORANGE
    });

    slide.addText([
        { text: 'Two places shaped us:\n\n', options: { bold: true } },
        { text: 'Wilmington, NC\n', options: { bold: true, color: ORANGE } },
        { text: 'Early morning paddle-outs.\nSunset dinners on the porch with family.\n\n' },
        { text: 'Austin, TX\n', options: { bold: true, color: ORANGE } },
        { text: 'Dawn gym sessions. Building something meaningful.\nHome for dinner with the people who matter.\n\n' },
        { text: 'For those who refuse to choose.\n\n', options: { bold: true } },
        { text: 'Crush your goals AND be present.\nFitness fuels. Rest sharpens. Family grounds.' }
    ], {
        x: 0.5, y: 1.2, w: 5.2, h: 4,
        fontSize: 13, color: CREAM, valign: 'top'
    });

    // ============ SLIDE 3: What GRR Means ============
    slide = pptx.addSlide();
    slide.background = { color: CREAM };

    // Header bar
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10, h: 0.9,
        fill: { color: ORANGE }
    });

    slide.addText('What GRR Means', {
        x: 0.5, y: 0.2, w: 9, h: 0.5,
        fontSize: 28, bold: true, color: CREAM
    });

    const pillars = [
        {
            title: 'GATHER',
            text: 'Bring together what matters most.\n\nFamily. Friends. Community.\n\nThis is your fuel.'
        },
        {
            title: 'REST',
            text: 'Recovery isn\'t weakness.\nIt\'s strategy.\n\nYour best work comes after intentional rest.'
        },
        {
            title: 'RISE',
            text: 'Show up stronger.\nEvery single day.\n\nIn the gym. At work. For your family.'
        }
    ];

    pillars.forEach((p, i) => {
        const x = 0.5 + (i * 3.15);
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
            x: x, y: 1.2, w: 3, h: 3.8,
            fill: { color: 'FFFFFF' },
            shadow: { type: 'outer', blur: 4, offset: 2, angle: 45, opacity: 0.15 }
        });
        slide.addText(p.title, {
            x: x, y: 1.4, w: 3, h: 0.6,
            fontSize: 22, bold: true, color: ORANGE, align: 'center'
        });
        slide.addText(p.text, {
            x: x + 0.2, y: 2.2, w: 2.6, h: 2.6,
            fontSize: 12, color: BLACK, align: 'center', valign: 'top'
        });
    });

    // ============ SLIDE 4: The Collection Overview ============
    slide = pptx.addSlide();
    slide.background = { color: BLACK };

    slide.addText('The Collection', {
        x: 0.5, y: 0.3, w: 9, h: 0.5,
        fontSize: 30, bold: true, color: ORANGE
    });

    slide.addText('Premium T-Shirts — $45 | 100% Cotton | Made to Last', {
        x: 0.5, y: 0.85, w: 9, h: 0.3,
        fontSize: 14, color: CREAM
    });

    // 4 shirts in a row - using SQUARE aspect ratios for shirt images
    const shirts = [
        { folder: 'shirt1', title: 'Beach Truck' },
        { folder: 'shirt2', title: 'Longhorn Pier' },
        { folder: 'shirt3', title: 'Vintage Skull' },
        { folder: 'shirt4', title: 'Wave + Texas' }
    ];

    shirts.forEach((s, i) => {
        const x = 0.4 + (i * 2.4);
        // Back images are approximately 1024x1024 - use square aspect
        slide.addImage({
            path: path.join(brandDir, `tshirts/${s.folder}/back.png`),
            x: x, y: 1.3, w: 2.2, h: 2.7
        });
        slide.addText(s.title, {
            x: x, y: 4.15, w: 2.2, h: 0.35,
            fontSize: 12, bold: true, color: CREAM, align: 'center'
        });
    });

    slide.addText('ILM × ATX — Two roots, one identity', {
        x: 0, y: 4.7, w: 10, h: 0.3,
        fontSize: 13, color: ORANGE, align: 'center'
    });

    // ============ SLIDES 5-8: Individual Shirt Details ============
    const shirtDetails = [
        { folder: 'shirt1', title: 'Beach Truck', tagline: 'Vintage soul meets coastal freedom' },
        { folder: 'shirt2', title: 'Longhorn Pier', tagline: 'Where Texas pride meets ocean tide' },
        { folder: 'shirt3', title: 'Vintage Skull', tagline: 'Heritage. Grit. Timeless style.' },
        { folder: 'shirt4', title: 'Wave + Texas', tagline: 'Clean lines. Bold roots.' }
    ];

    shirtDetails.forEach((s, idx) => {
        slide = pptx.addSlide();
        slide.background = { color: CREAM };

        slide.addText(`Design ${idx + 1}: ${s.title}`, {
            x: 0.5, y: 0.25, w: 9, h: 0.45,
            fontSize: 26, bold: true, color: BLACK
        });

        slide.addText(s.tagline, {
            x: 0.5, y: 0.7, w: 9, h: 0.3,
            fontSize: 14, italic: true, color: ORANGE
        });

        // Two shirts side by side - maintain aspect ratio
        // Front and back images - use equal square sizing
        slide.addImage({
            path: path.join(brandDir, `tshirts/${s.folder}/front.png`),
            x: 0.8, y: 1.15, w: 3.8, h: 3.8
        });

        slide.addImage({
            path: path.join(brandDir, `tshirts/${s.folder}/back.png`),
            x: 5.4, y: 1.15, w: 3.8, h: 3.8
        });

        slide.addText('FRONT', { x: 0.8, y: 5, w: 3.8, h: 0.3, fontSize: 12, color: ORANGE, align: 'center' });
        slide.addText('BACK', { x: 5.4, y: 5, w: 3.8, h: 0.3, fontSize: 12, color: ORANGE, align: 'center' });
    });

    // ============ SLIDE 9: Who We Serve ============
    slide = pptx.addSlide();
    slide.background = { color: CREAM };

    // Orange right panel
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: 5.8, y: 0, w: 4.2, h: 5.63,
        fill: { color: ORANGE }
    });

    // Square shirt image on right
    slide.addImage({
        path: path.join(brandDir, 'tshirts/shirt2/back.png'),
        x: 6.2, y: 1, w: 3.4, h: 3.4
    });

    slide.addText('Who We Serve', {
        x: 0.5, y: 0.4, w: 5, h: 0.5,
        fontSize: 28, bold: true, color: BLACK
    });

    // MORE GENERIC personas - removed specific ages
    const personas = [
        {
            title: 'The Active Parent',
            text: 'Early gym sessions before the house wakes up. Quality time matters as much as quality reps.'
        },
        {
            title: 'The Coastal Texan',
            text: 'Beach roots, Texas pride. Fewer things, better things. Authenticity over trends.'
        },
        {
            title: 'The Balanced Builder',
            text: 'Building a career AND a life. Burnout isn\'t a badge. Success includes health and family.'
        }
    ];

    personas.forEach((p, i) => {
        const y = 1.1 + (i * 1.35);
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
            x: 0.4, y: y, w: 5.1, h: 1.15,
            fill: { color: 'FFFFFF' },
            shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.12 }
        });
        slide.addText(p.title, {
            x: 0.6, y: y + 0.15, w: 4.7, h: 0.35,
            fontSize: 15, bold: true, color: ORANGE
        });
        slide.addText(p.text, {
            x: 0.6, y: y + 0.5, w: 4.7, h: 0.55,
            fontSize: 11, color: BLACK
        });
    });

    // ============ SLIDE 10: Closing ============
    slide = pptx.addSlide();
    slide.background = { color: ORANGE };

    slide.addText("Let's Build This Together", {
        x: 0, y: 1.4, w: 10, h: 0.8,
        fontSize: 48, bold: true, color: CREAM, align: 'center'
    });

    slide.addText('Premium lifestyle apparel for those who\nwork hard, stay fit, and put family first.', {
        x: 0, y: 2.5, w: 10, h: 0.8,
        fontSize: 20, color: CREAM, align: 'center'
    });

    slide.addText('Gather. Rest. Rise.', {
        x: 0, y: 3.6, w: 10, h: 0.6,
        fontSize: 32, bold: true, color: BLACK, align: 'center'
    });

    slide.addText('ILM × ATX', {
        x: 0, y: 4.3, w: 10, h: 0.4,
        fontSize: 18, color: CREAM, align: 'center'
    });

    // Save
    const outputPath = path.join(__dirname, 'GRR_Pitch_Deck.pptx');
    await pptx.writeFile({ fileName: outputPath });
    console.log(`\n✅ Pitch deck v4 (fixed layout) created: ${outputPath}`);
}

createPitchDeck().catch(console.error);
