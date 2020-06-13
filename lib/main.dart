import 'package:flutter/material.dart';
import 'package:quickvitals/utils/const.dart';

import 'screens/detail_screen.dart';
import 'screens/detail_screen.dart';
import 'screens/detail_screen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: Constants.appName,
      theme: Constants.lighTheme(context),
      debugShowCheckedModeBanner: false,
      initialRoute: DetailScreen.id,
      routes: {
        DetailScreen.id : (context) => DetailScreen(),
      },


    );
  }
}
