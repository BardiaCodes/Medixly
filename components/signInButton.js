import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
const signUpButton;
return (
    <View style={styles.container}>

      {/* Sign In Button */}
      <View style={styles.placeholder}>
        <Text style={styles.smalltext}>Don't have an account yet?</Text>
        <TouchableOpacity>
          <View style={styles.SignUpButton}>
            <Text style={styles.SignUpText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
