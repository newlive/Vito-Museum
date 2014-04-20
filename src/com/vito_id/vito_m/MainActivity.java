package com.vito_id.vito_m;

import android.os.Bundle;
import org.apache.cordova.DroidGap;
import android.view.Menu;

public class MainActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
        //MyWebView.addJavascriptInterface(new MyService(this), "MyHandler");
    }

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

}
