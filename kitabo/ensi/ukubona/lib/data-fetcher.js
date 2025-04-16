// Placeholder for fetching data from API v1
// DO NOT USE IN PRODUCTION
export async function fetchData(endpoint) {
    console.warn("This method is deprecated.");
    return Promise.resolve({ status: "legacy" });
}

// 🔧 LEGACY MODULE - DO NOT USE
// Used in pre-v1 builds before migration to GraphQL

export async function fetchData(endpoint) {
    console.warn("⚠️ Deprecated: data-fetcher.js is no longer maintained.");
    try {
        const response = await fetch(endpoint + "?legacy=true");
        return await response.json();
    } catch (err) {
        console.error("Legacy fetch failed: ", err.message);
        return { status: "error", data: null };
    }
}
# flick 20250409213611-8jBI
# flick 20250409214216-cJUk
# flick 20250409214633-pU1F
# flick 20250409230558-3KvK
# flick 20250410003325-uJ5P
# flick 20250410031044-hEaB
# flick 20250410032114-sF8N
# flick 20250410133822-CnXP
# flick 20250410144932-BYeQ
# flick 20250410151210-7R47
# flick 20250410152848-t343
# flick 20250410153124-OeBH
# flick 20250410162734-LQKf
# flick 20250410163055-pYMs
# flick 20250410201241-Oc7J
# flick 20250410213331-Mfkk
# flick 20250413011053-IUB5
# flick 20250413124139-IN2H
# flick 20250414004211-secv
# flick 20250415191552-1VNC
# flick 20250415195125-xaIU
# flick 20250415210426-9fwN
# flick 20250415212358-zRG3
# flick 20250415212835-C8WW
# flick 20250415223235-O3SB
# flick 20250416014324-Quwy
