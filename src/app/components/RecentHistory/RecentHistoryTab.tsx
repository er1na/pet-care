"use client";

import React, { useState } from 'react';

const tabs = ['medical', 'vaccine', 'medicine', 'diary'];

export default function RecentHistoryTab() {
  const [activeTab, setActiveTab] = useState('medical');

  return (
    <div className="w-full rounded-xl bg-white/20 backdrop-blur-md p-2">
      <div className="flex items-center justify-between gap-2 w-full">
        {tabs.map(tab => (
          <button key={tab} className={`${activeTab === tab ? 'bg-white/20 backdrop-blur-md' : ''} rounded-xl p-2 w-full`} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}