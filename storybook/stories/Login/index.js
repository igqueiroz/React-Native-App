import styled from 'styled-components';

const Login = (props) => {
return (
    <>
          <Image
            style={CarouselStyledButtons.tinyLogo}
            source={require('../../../src/assets/images/agendapets_logo.png')}
          />
          <LinearGradient
            colors={CarouselStyledButtons.gradientAgenda}
            style={{
              ...CarouselStyledButtons.styleGradient,
              ...CarouselStyledButtons.styleTopAgenda
            }}
          >
            <Text
              style={CarouselStyledButtons.styleButton}>
              Entrar com Facebook
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={CarouselStyledButtons.gradientFacebook}
            style={{
              ...CarouselStyledButtons.styleGradient,
              ...CarouselStyledButtons.styleTopFacebook
            }}
          >
            <Text
              style={CarouselStyledButtons.styleButton}>
              Entrar com Facebook
            </Text>
          </LinearGradient>
          </>
)
}

export default Login;