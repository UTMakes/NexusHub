import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import SoftwareCard from './SoftwareCard';
import DetailModal from './DetailModal';
import { SOFTWARE_DATA } from './SoftwareData';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedSoftware, setSelectedSoftware] = useState(null);

  // 1. Filter logic based on search query
  const filteredSoftware = SOFTWARE_DATA.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 2. Sort logic based on selection
  const sortedSoftware = [...filteredSoftware].sort((a, b) => {
    if (sortBy === 'popular') return b.starCount - a.starCount; // Sort by numeric starCount
    if (sortBy === 'alphabetical') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#080c14] text-white font-sans selection:bg-emerald-500/30">
      {/* Navigation Bar */}
      <Navbar onHome={() => { setSearchQuery(''); setSelectedSoftware(null); }} />

      {/* Hero Section with Search & Sort */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedSoftware.map((software) => (
            <SoftwareCard
              key={software.id}
              software={software}
              onClick={() => setSelectedSoftware(software)}
            />
          ))}
        </div>

        {/* Empty State */}
        {sortedSoftware.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No software found matching "{searchQuery}"</p>
          </div>
        )}
      </main>

      {/* Detail Modal (Pop-up) */}
      {selectedSoftware && (
        <DetailModal
          software={selectedSoftware}
          onClose={() => setSelectedSoftware(null)}
        />
      )}
    </div>
  );
};

export default App;
