window.addEventListener("hashchange", function() {
            const hash = window.location.hash.replace("#", "");
            document.querySelectorAll("section").forEach(function($e) {
                $e.classList.add("is-hidden");
            });
            document.getElementById(hash + "ID").classList.remove("is-hidden");
        });