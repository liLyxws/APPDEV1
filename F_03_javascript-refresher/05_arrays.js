// 05_arrays.js - Array Fundamentals
// Scenario: Synthwave DJ Playlist Queue Manager

// Creating arrays
const initialTracks = ["Neon Horizon", "Midnight Drive", "Cyber Sunset", "Starlight Echoes"];
const trackDurations = [215, 180, 245, 195]; // duration in seconds

console.log("=== Initial Playlist ===");
console.log("Track List:", initialTracks);
console.log("Total Tracks Count:", initialTracks.length);
console.log("First Track:", initialTracks[0]);
console.log("Last Track:", initialTracks[initialTracks.length - 1]);

// Mutating arrays: Adding and removing elements
console.log("\n=== Updating Queue ===");
// Add track to the end (push)
initialTracks.push("Solar Flare");
console.log("After push ('Solar Flare'):", initialTracks);

// Add track to the beginning (unshift)
initialTracks.unshift("Retro Awakening");
console.log("After unshift ('Retro Awakening'):", initialTracks);

// Remove first track (shift)
const playedTrack = initialTracks.shift();
console.log(`Played track: "${playedTrack}". Remaining queue:`, initialTracks);

// Remove last track (pop)
const removedTrack = initialTracks.pop();
console.log(`Removed last track: "${removedTrack}". Final queue:`, initialTracks);

// Matrix/Nested Array Demonstration
const playlistCategories = [
    ["Chillwave", "Dreamscape"],
    ["Darksynth", "Overdrive", "Nightfall"],
    ["Retrowave", "Outrun"]
];

console.log("\n=== Category Matrix Access ===");
console.log("Darksynth track sample:", playlistCategories[1][0]); // Darksynth
console.log("Retrowave sub-track sample:", playlistCategories[2][1]); // Outrun
