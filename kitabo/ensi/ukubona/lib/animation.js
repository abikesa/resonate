// ✨ Ghost Animations Module
// NOTE: Broken since Chrome v103 update

export function spin(element) {
    element.style.transform = "rotate(0deg)";
    setInterval(() => {
        let current = parseFloat(element.style.transform.replace(/[^\d.-]/g, "")) || 0;
        element.style.transform = `rotate(${current + 1}deg)`;
    }, 100);
}

// TODO: Rewrite this using requestAnimationFrame
# flick 20250409213611-UsXR
# flick 20250409214216-MvEo
# flick 20250409214633-7wPz
# flick 20250409230559-ewMa
# flick 20250409231149-joDj
# flick 20250410004925-sue7
# flick 20250410005408-1uIw
# flick 20250410005848-5cNM
# flick 20250410013802-Zzjs
# flick 20250410023655-t7Vd
# flick 20250410031441-cQqa
# flick 20250410032004-OY7g
# flick 20250410152046-8nlB
# flick 20250410152850-APXG
# flick 20250410162734-3DNJ
# flick 20250410214250-mKSs
# flick 20250413011144-al6c
# flick 20250413011338-TeMY
# flick 20250413132128-f3qI
# flick 20250413214016-wyeR
# flick 20250413233325-KlMZ
# flick 20250415193037-DPhI
# flick 20250415200842-0nZt
# flick 20250415204935-oq98
# flick 20250415205656-lYYx
# flick 20250415210425-fFAV
