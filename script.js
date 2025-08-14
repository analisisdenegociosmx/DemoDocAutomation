document.addEventListener('DOMContentLoaded', function(){
  if (window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: true,
      securityLevel: 'loose',
      theme: 'base',
      themeVariables: {
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto',
        fontSize: '17px',
        primaryColor: '#CAE9FF',
        primaryBorderColor: '#1B4965',
        primaryTextColor: '#0F172A',
        secondaryColor: '#FFD166',
        secondaryBorderColor: '#CA8A04',
        tertiaryColor: '#E0F2FE',
        lineColor: '#1B4965',
        clusterBkg: '#FFFFFF',
        nodeBorder: '#1B4965',
        edgeLabelBackground: '#FFFFFF'
      },
      flowchart: {
        curve: 'basis',
        padding: 26,
        htmlLabels: true,
        diagramPadding: 18,
        nodeSpacing: 90,
        rankSpacing: 120,
        useMaxWidth: true
      }
    });
    // Fallback en caso de que el startOnLoad no ejecute por tiempos
    try { window.mermaid.run(); } catch(e) { console.warn('Mermaid run fallback:', e); }
  } else {
    console.error('Mermaid no está cargado');
  }
});