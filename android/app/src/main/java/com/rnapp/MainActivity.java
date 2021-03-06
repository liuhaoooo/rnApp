package com.rnapp;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      // 这里定义了在加载js的时候，同时弹起启动屏
      // 第二个参数true，是启动页全屏显示，隐藏了状态栏。
      SplashScreen.show(this, true);
      super.onCreate(savedInstanceState);
  }
  @Override
  protected String getMainComponentName() {
    return "rnApp";
  }
}
