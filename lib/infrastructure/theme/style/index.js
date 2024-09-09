"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactNative = require("react-native");
var styles = _reactNative.StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // @ts-ignore
    background: "#FFFFFF",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "flex-start"
  },
  logo: {
    width: "50%",
    height: "20%",
    marginTop: 107,
    marginBottom: 10,
    marginLeft: 93,
    marginRight: 93
  },
  typography: {
    color: "#2E312E",
    textAlign: "center",
    fontSize: 28,
    fontStyle: "normal",
    marginBottom: 10
  },
  typography2: {
    width: 380,
    textAlign: 'center',
    color: '#5C5F5B',
    fontSize: 14,
    letterSpacing: 0.25,
    marginBottom: 20
  },
  textInputContainer: {
    width: "90%",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 20,
    alignSelf: 'center',
    backgroundColor: '#F2F2F2',
    // @ts-ignore
    activeUnderlineColor: '#006D3A',
    inactiveUnderlineColor: '#f2f2f2'
  },
  loginButton: {
    width: '90%',
    borderRadius: 64,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
    alignSelf: "center",
    backgroundColor: '#006D3A',
    marginBottom: 12
  },
  problemButton: {
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
    alignSelf: "center",
    // @ts-ignore
    textColor: "#006D3A",
    backgroundColor: '#FFFFFF',
    labelStyle: {
      color: "#006D3A",
      fontSize: 11
    }
  },
  problemButton2: {
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    // @ts-ignore
    textColor: "#006D3A",
    backgroundColor: '#FFFFFF',
    labelStyle: {
      color: "#006D3A",
      fontSize: 11
    }
  },
  loadingContainer: {
    width: "90%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    // @ts-ignore
    background: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16
  },
  loadingOverlay: {
    width: 412,
    height: 892,
    opacity: 0.60,
    // @ts-ignore
    background: '#757874'
  },
  report: {
    // @ts-ignore
    container: {
      margin: 24,
      backgroundColor: "white",
      padding: 20,
      flexDirection: "col",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10
    },
    title: {
      width: '100%',
      color: '#191C19',
      fontSize: 24,
      lineHeight: 32,
      marginBottom: 10,
      marginLeft: 24
    },
    subtitle: {
      width: '100%',
      color: '#414941',
      fontSize: 14,
      marginLeft: 24,
      lineHeight: 20,
      letterSpacing: 0.25
    },
    textArea: {
      width: "95%",
      backgroundColor: '#F3F4EF',
      minHeight: 100,
      borderRadius: 16,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft: 0,
      marginVertical: 24,
      activeOutlineColor: "#ffffff"
    },
    cancelBtn: {
      borderRadius: 4,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      textColor: 'black'
    },
    confirmBtn: {
      backgroundColor: '#BA1A1A',
      borderRadius: 64,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  profile: {
    // @ts-ignore
    container: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'around',
      alignItems: 'center',
      height: 'auto',
      paddingHorizontal: 16,
      paddingBottom: 20,
      paddingTop: _reactNative.Platform.OS === 'ios' ? 44 : 32,
      backgroundColor: '#FFFFFF'
    },
    textContainer: {
      width: '70%',
      marginLeft: 16
    },
    username: {
      color: '#2E312E',
      fontSize: 24,
      lineHeight: 36
    },
    greeting: {
      color: '#2E312E',
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.50
    }
  },
  campaignProfile: {
    // @ts-ignore
    container: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'around',
      alignItems: 'center',
      height: 'auto',
      paddingHorizontal: 16,
      paddingBottom: 20,
      paddingTop: _reactNative.Platform.OS === 'ios' ? 44 : 32,
      backgroundColor: '#006D3A'
    },
    textContainer: {
      width: '70%',
      marginLeft: 16
    },
    username: {
      color: '#fff',
      fontSize: 24,
      lineHeight: 36
    },
    greeting: {
      color: '#fff',
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.50
    }
  },
  drawer: {
    // @ts-ignore
    container: {
      width: '90%',
      height: 'auto',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 12,
      marginHorizontal: 16,
      borderRadius: 16,
      marginTop: 24
    },
    header: {
      marginBottom: 16,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%"
    },
    mid: {
      marginBottom: 16,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%"
    },
    image: {
      width: 111,
      height: 89,
      resizeMode: 'contain',
      borderRadius: 16,
      backgroundColor: 'rgba(247, 190, 0, 0.80)'
    },
    event: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
    },
    label: {
      fontSize: 16,
      color: '#fff'
    },
    btn: {
      backgroundColor: '#006D3A',
      height: 40,
      justifyContent: 'center',
      gap: 8,
      width: "90%",
      alignSelf: "center"
    },
    onboarding: {
      fontSize: 16,
      letterSpacing: 0.15
    },
    infos: {
      marginTop: 4,
      fontSize: 14,
      letterSpacing: 0.25
    }
  },
  form: {
    // @ts-ignore
    dropdown2BtnStyle: {
      width: '90%',
      height: 50,
      marginHorizontal: 20,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.7)'
    },
    dropdown2BtnTxtStyle: {
      color: 'rgba(0, 0, 0, 0.7)',
      textAlign: 'left'
    },
    dropdown2DropdownStyle: {
      backgroundColor: '#444',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12
    },
    dropdown2RowStyle: {
      backgroundColor: '#444',
      borderBottomColor: '#C5C5C5'
    },
    dropdown2RowTxtStyle: {
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold'
    }
  },
  chip: {
    // @ts-ignore
    container: {
      backgroundColor: "#EAFFEA"
    },
    text: {
      fontSize: 12,
      color: "#005D3A",
      width: "90%",
      marginHorizontal: 16
    }
  }
});
var _default = exports["default"] = styles;