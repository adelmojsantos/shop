import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  
  maxWidth: 520,
  margin: '0 auto',

  '@bp3': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',

    maxWidth: 1066,
    margin: '0 auto',
  }
})

export const ImageContainer = styled('div', {
  maxWidth: 576,
  height: 480,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  '@bp3': {
    maxWidth: 576,
    height: 480,
  },
  
  '& img':{
    objectFit: 'cover',
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300'
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300'
  },

  button: {
    marginTop: '1rem',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    transition: 'background 0.3s',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:hover': {
      backgroundColor: '$green300',
    },

    '@bp3': {
      marginTop: 'auto',
    },
    '@bp4': {
       marginBottom: '1rem',
    }

  }
})
