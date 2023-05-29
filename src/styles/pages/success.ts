import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 520,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: 'xl',
    color: '$gray300',
    maxWidth: 420,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',

    '&:hover': {
      color: '$green300'
    }
  }

})

export const ImageContainer = styled('div', {
  width: '100%',
  height: 200,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  marginTop: '3rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', 

  img: {
    objectFit: 'cover',
  }
})