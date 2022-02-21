const SigninStyle = {
  flexViewOne: {
    flex: 1
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center'
  },
  gradientAgenda: ['#FCB314', '#ED1C24'],
  gradientRegister: ['#FF4C00', '#FF4C00', '#FF4C00'],
  styleGradient: { 
    borderRadius: 5,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  styleInput: {
    fontSize: 15,
    color: '#FF4C00',
    fontWeight: 'bold',
    paddingVertical: 5,
    marginTop: 5,
    padding: 10,
    backgroundColor: "#CACACA",
    borderRadius: 5,
    width: 270

  },
  view: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 45
  },
  signinStyleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  register: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    height: 36,
    color: 'white',
    justifyContent: 'center',
    width: 'auto',
    paddingHorizontal: 125
  },
  password: {
    position: 'absolute',
    top: 10,
    right: 5,
    zIndex: 99
  }
}

module.exports = SigninStyle