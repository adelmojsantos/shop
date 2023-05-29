import { styled } from "..";

export const NavigationWrapper = styled('main', {
  position: 'relative',
})

export const HomeContainer = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 640px) / 2))',
  marginLeft: 'auto',
  minHeight: 480,
  position: 'relative',
  
  '@bp3': {
    maxWidth: 'calc(100vw - ((100vw - 1066px) / 2))',    
    minHeight: 480,
  }
})

export const Product = styled('span', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }, 

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem', 
    padding: '1rem',

    borderRadius: 6,
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', 
    
    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1,
    }
  }
})

export const Arrow = styled('button', {
  width: '30px',
  height: '30px',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  '-webkit-transform': 'translateY(-50%)',
  color: '$gray100',
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',

  '&.left': {
    left:'5px',
  },
  
  '&.right': {
  left: 'auto',
  right: '5px',
  },
  
  '&:disabled': {
    color: '$gray500',
  },
  
})

export const Dots = styled('div', {
  display: 'flex',
  padding: '10px 0',
  justifyContent: 'center',

  button: {
    border: 'none',
    width: '10px',
    height: '10px',
    background: '$gray100',
    borderRadius: '50%',
    margin: '0 5px',
    padding: '5px',
    cursor: 'pointer',

    '&:focus': {
      outline: 'none',
    },

    '&.active': {
      background: '$green500'
    }
  }
})