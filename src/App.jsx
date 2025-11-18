import React, {useEffect, useMemo, useState} from 'react';

// Configuration: API base - works with any server deployment
// Check if running on localhost (development) or deployed (production)
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API_BASE = process.env.REACT_APP_API_BASE || (isLocalhost ? 'http://localhost:5000/api' : '/api')
function App(){
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // filters
  const [q, setQ] = useState('');
  const [industry, setIndustry] = useState('All');
  const [location, setLocation] = useState('All');
  const [view, setView] = useState('table'); // table or cards

  // pagination
  const [page, setPage] = useState(1);
  const pageSize = 5;

  useEffect(()=>{
    fetchCompanies();
  },[]);

  async function fetchCompanies(){
    setLoading(true);
    setError(null);
    try{
      const res = await fetch(`${API_BASE}/companies`);
      if(!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setCompanies(data);
    }catch(err){
      setError(err.message || 'Unknown error');
    }finally{
      setLoading(false);
    }
  }

  // derive filter options
  const industries = useMemo(()=>{
    const s = new Set(companies.map(c=>c.industry));
    return ['All', ...Array.from(s)];
  },[companies]);

  const locations = useMemo(()=>{
    const s = new Set(companies.map(c=>c.location));
    return ['All', ...Array.from(s)];
  },[companies]);

  // filter logic
  const filtered = useMemo(()=>{
    let out = companies;
    if(q) {
      const term = q.toLowerCase();
      out = out.filter(c => c.name.toLowerCase().includes(term) || (c.industry||'').toLowerCase().includes(term));
    }
    if(industry !== 'All') out = out.filter(c => c.industry === industry);
    if(location !== 'All') out = out.filter(c => c.location === location);
    return out;
  },[companies,q,industry,location]);

  // pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  useEffect(()=>{ if(page > totalPages) setPage(1); },[totalPages, page]);
  const pageItems = useMemo(()=>{
    const start = (page-1)*pageSize;
    return filtered.slice(start, start+pageSize);
  },[filtered,page,pageSize]);

  return (
    <div className="app">
      <div className="header">
        <div>
          <h1 style={{margin:0}}>Companies Directory</h1>
        </div>
        <div style={{display:'flex',gap:8}}>
          <button className="btn" onClick={fetchCompanies}>Refresh</button>
          <button className="btn" onClick={()=>window.location.reload()}>Hard Reload</button>
        </div>
      </div>

      <div className="controls">
        <input className="input" placeholder="Search by name or industry" value={q} onChange={e=>{setQ(e.target.value); setPage(1)}} />

        <select className="input" value={industry} onChange={e=>{setIndustry(e.target.value); setPage(1)}}>
          {industries.map(i=> <option key={i} value={i}>{i}</option>)}
        </select>

        <select className="input" value={location} onChange={e=>{setLocation(e.target.value); setPage(1)}}>
          {locations.map(l=> <option key={l} value={l}>{l}</option>)}
        </select>

        <select className="input" value={view} onChange={e=>setView(e.target.value)}>
          <option value="table">Table</option>
          <option value="cards">Cards</option>
        </select>

      </div>

      {loading && <div className="loading">Loading companies...</div>}
      {error && <div className="error">{error}. If you're running locally, use: <code>npm run dev</code></div>}

      {!loading && !error && (
        <>
          {view === 'table' ? (
            <table className="table" role="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Industry</th>
                  <th>Location</th>
                  <th>Size</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {pageItems.map(c => (
                  <tr key={c.id}>
                    <td><strong>{c.name}</strong></td>
                    <td>{c.industry}</td>
                    <td>{c.location}</td>
                    <td>{c.size}</td>
                    <td><span className="badge">{c.rating} ★</span></td>
                  </tr>
                ))}
                {pageItems.length === 0 && (
                  <tr><td colSpan={5}>No companies match your filters.</td></tr>
                )}
              </tbody>
            </table>
          ) : (
            <div className="card-grid">
              {pageItems.map(c=> (
                <div className="card" key={c.id}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <strong style={{fontSize:16}}>{c.name}</strong>
                    <div className="badge">{c.rating} ★</div>
                  </div>
                  <div style={{marginTop:8,color:'#334155'}}>{c.industry} · {c.location}</div>

                  <div style={{marginTop:10,display:'flex',gap:8,alignItems:'center'}}>
                    <div style={{fontSize:13,color:'#475569'}}>Size: <strong>{c.size}</strong></div>
                    <button className="btn" style={{marginLeft:'auto'}} onClick={()=>alert(`Open details for ${c.name}`)}>Details</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="footer">
            <div>Showing <strong>{filtered.length}</strong> results</div>
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <button className="btn" disabled={page<=1} onClick={()=>setPage(p=>Math.max(1,p-1))}>Prev</button>
              <div style={{padding:'6px 10px',borderRadius:8,border:'1px solid #e6eef6'}}>{page} / {totalPages}</div>
              <button className="btn" disabled={page>=totalPages} onClick={()=>setPage(p=>Math.min(totalPages,p+1))}>Next</button>
            </div>
          </div>
        </>
      )}

      <div style={{marginTop:18,fontSize:13,color:'#64748b'}}>
        Designed & Developed by Satya Chaitanya
      </div>
    </div>
  );
}

export default App;
