// ═══════════════════════════════════════════════════════════════════════════════
// AGREGAR AL WORKER DE CLOUDFLARE (losinno-proxy)
// 
// Agregar estas rutas junto a las de /pacientes, usando el mismo patrón.
// El archivo se almacena como topic-overrides.json en la raíz de gh-pages.
// ═══════════════════════════════════════════════════════════════════════════════

// ── RUTA GET /topic-overrides ────────────────────────────────────────────────
// Agregar este caso en el handler de GET requests:

if (path === '/topic-overrides') {
  const ghRes = await fetch(
    `https://api.github.com/repos/${REPO}/contents/topic-overrides.json?ref=gh-pages`,
    { headers: ghHeaders }
  );
  if (!ghRes.ok) {
    // Si no existe el archivo, devolver un objeto vacío
    if (ghRes.status === 404) {
      return new Response(JSON.stringify({ content: btoa('{}'), sha: null }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    return new Response('Error', { status: ghRes.status, headers: corsHeaders });
  }
  const data = await ghRes.json();
  return new Response(JSON.stringify({ content: data.content, sha: data.sha }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

// ── RUTA PUT /topic-overrides ────────────────────────────────────────────────
// Agregar este caso en el handler de PUT requests:

if (path === '/topic-overrides') {
  const body = await request.json();
  const ghBody = {
    message: body.message || 'Update topic overrides',
    content: body.content,
    branch: 'gh-pages'
  };
  if (body.sha) ghBody.sha = body.sha;

  const ghRes = await fetch(
    `https://api.github.com/repos/${REPO}/contents/topic-overrides.json`,
    {
      method: 'PUT',
      headers: { ...ghHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify(ghBody)
    }
  );
  const data = await ghRes.json();
  return new Response(JSON.stringify(data), {
    status: ghRes.status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}
