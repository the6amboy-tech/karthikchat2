"use client";
import React, { useState } from 'react';
import { Video, Plus, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Home() {
  const [roomCode, setRoomCode] = useState('');

  const handleAction = (type: 'create' | 'join') => {
    if (!roomCode) return alert("Please enter a room code first!");
    // Logic: Redirect to /[roomCode] or trigger your WebRTC logic
    console.log(`${type} room: ${roomCode}`);
    window.location.href = `/${roomCode}`; 
  };

  return (
    <main className="min-h-screen bg-[#020617] flex items-center justify-center p-4 selection:bg-blue-500/30">
      {/* Dynamic Background Accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md transition-all duration-700 animate-in fade-in zoom-in-95">
        <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl shadow-black/50">
          
          {/* Brand Header */}
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-slate-950 p-4 rounded-2xl border border-white/10 mb-4">
                <Video className="text-blue-400 w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-tight">
              Karthik Chat
            </h1>
            <p className="text-slate-500 mt-2 font-medium tracking-wide">Premium Video Experiences</p>
          </div>

          {/* Form Area */}
          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] px-1">
                Room Identification
              </label>
              <input
                type="text"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                placeholder="e.g. 808"
                className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all text-center text-2xl font-mono tracking-[0.25em]"
              />
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={() => handleAction('create')}
                className="group relative flex items-center justify-center gap-3 bg-white text-slate-950 font-bold py-4 rounded-2xl transition-all hover:bg-blue-50 active:scale-[0.97]"
              >
                <Plus size={20} />
                Create Room
              </button>
              
              <button 
                onClick={() => handleAction('join')}
                className="flex items-center justify-center gap-3 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold py-4 rounded-2xl border border-white/5 transition-all active:scale-[0.97]"
              >
                Join Meeting
                <ArrowRight size={20} className="text-slate-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
            <ShieldCheck size={14} className="text-emerald-500/50" />
            <span>Encrypted & Private</span>
          </div>
        </div>
      </div>
    </main>
  );
}
