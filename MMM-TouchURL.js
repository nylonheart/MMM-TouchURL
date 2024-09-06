Module.register("MMM-TouchURL", {
    defaults: {
        url: "https://www.example.com", // タッチしたときに開くURL
        buttonText: "Open URL", // ボタンに表示するテキスト
        reloadTimeout: 10000 // URLを開いた後に画面をリセットするまでの時間（ミリ秒）
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.id = "touchButton";
        wrapper.innerHTML = this.config.buttonText;
        wrapper.style.cursor = "pointer";
        wrapper.style.padding = "10px";
        wrapper.style.backgroundColor = "#3498db";
        wrapper.style.color = "#fff";
        wrapper.style.textAlign = "center";
        wrapper.style.borderRadius = "8px";

        // クリックイベント（タッチイベント）を追加
        wrapper.addEventListener("click", () => {
            this.openUrl();
        });

        return wrapper;
    },

    openUrl: function() {
        var newWindow = window.open(this.config.url, "_blank");

        // リロードタイムアウトが0でない場合にリロードを実行
        if (this.config.reloadTimeout > 0) {
            setTimeout(() => {
                if (newWindow) {
                    newWindow.close();
                }
                location.reload();
            }, this.config.reloadTimeout);
        }
    }
});