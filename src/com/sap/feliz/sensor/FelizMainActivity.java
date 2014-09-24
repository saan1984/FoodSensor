package com.sap.feliz.sensor;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;

public class FelizMainActivity extends Activity {

    private WebView webView = null;

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        webView = (WebView) findViewById(R.id.webView);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.loadUrl("file:///android_asset/index.html");

    }
}
