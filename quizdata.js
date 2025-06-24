// Russian Verb Conjugations - Main Data Loader
// Registry of available verb group files
const verbGroupFiles = {
  "essential": [
    "essential-verbs-1.js",
    "essential-verbs-2.js", 
    "essential-verbs-3.js",
    "essential-verbs-4.js",
    "essential-verbs-5.js",
    "essential-verbs-6.js",
    "essential-verbs-7.js"
  ],
  "daily-actions": [
    "daily-actions-1.js",
    "daily-actions-2.js"
  ]
};

// Combined verb data - populated by loading group files
let verbData = {};
let loadedGroups = new Set();

// Load verb groups using script tags (for compatibility)
function loadVerbGroups(selectedGroups) {
  return new Promise((resolve, reject) => {
    // Check if we already have all the needed groups loaded
    const needToLoad = selectedGroups.filter(group => !loadedGroups.has(group));
    
    if (needToLoad.length === 0) {
      resolve(verbData);
      return;
    }

    let scriptsToLoad = [];
    needToLoad.forEach(groupName => {
      if (verbGroupFiles[groupName]) {
        scriptsToLoad.push(...verbGroupFiles[groupName]);
      }
    });

    if (scriptsToLoad.length === 0) {
      resolve(verbData);
      return;
    }

    let loadedScripts = 0;
    const totalScripts = scriptsToLoad.length;

    scriptsToLoad.forEach(filename => {
      const script = document.createElement('script');
      script.src = filename;
      script.onload = () => {
        loadedScripts++;
        if (loadedScripts === totalScripts) {
          // Mark groups as loaded
          needToLoad.forEach(group => loadedGroups.add(group));
          resolve(verbData);
        }
      };
      script.onerror = () => {
        console.warn(`Failed to load verb file: ${filename}`);
        loadedScripts++;
        if (loadedScripts === totalScripts) {
          needToLoad.forEach(group => loadedGroups.add(group));
          resolve(verbData);
        }
      };
      document.head.appendChild(script);
    });
  });
}

// Helper function to get verbs by group
function getVerbsByGroups(selectedGroupNames) {
  const verbs = {};
  
  for (const [verbKey, verbInfo] of Object.entries(verbData)) {
    // Check if this verb belongs to any of the selected groups
    if (verbInfo.groups && verbInfo.groups.some(group => selectedGroupNames.includes(group))) {
      verbs[verbKey] = verbInfo;
    }
  }
  
  return verbs;
}

// Function to add verb data from loaded files
function addVerbData(newVerbData) {
  Object.assign(verbData, newVerbData);
}

// Load essential verbs by default when page loads
document.addEventListener('DOMContentLoaded', async function() {
  try {
    await loadVerbGroups(['essential']);
  } catch (error) {
    console.warn('Failed to load default verb groups:', error);
  }
});