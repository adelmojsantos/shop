import { styled } from "..";

export const Container = styled('div', {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: 'center',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 0',
  width: '100%',
  maxWidth: 640,
  margin: '0 auto',
  '@bp3': {
    maxWidth: 1066,
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    a: {
      color: '$green500',
      transition: 'filter 0.3s',
      background: '$gray800',
      borderRadius: 6,
      padding: '0.75rem',
      height: '3rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',

      '&:hover': {
        filter: 'brightness(0.8)'
      },
    },

    button: {
      border: 0,
      background: '$gray800',
      borderRadius: 6,
      padding: '0.75rem',
      width: '3rem',
      height: '3rem',
      cursor: 'pointer',
      color: '$gray100',
      transition: 'background-color 0.3s',
      position: 'relative',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
       },

      '&:hover': {
        filter: 'brightness(0.8)'
      },
    },
  },
})

export const Badge = styled('div', {
  position: 'absolute',
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.5rem',
  height: '1.5rem',
  backgroundColor: '$green500',
  borderRadius: '100%',
  fontWeight: 'bolder',
  top: -8,
  right: -6,
  boxShadow: '0 0 0 4px #121214',
})

export const SidebarMenu = styled('div', {
  position: 'absolute',
  bottom: 0,
  top: 0,
  right: 0,
  background: '$gray800',
  width: '30rem',
  maxHeight: '100vh',
  zIndex: 10,
  overflowY: 'scroll',

  '&::-webkit-scrollbar': {
    width: '3px',
    height: '3px',
  },

  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(90, 90, 90)',
  },

  '&::-webkit-scrollbar-track': {
    background: 'rgba(0, 0, 0, 0.2)',
  },

  transform: 'translateY(0)',
  opacity: 1,
  transition: 'all 0.2s ease-in-out',

  padding: 24,

  h4: {
      padding: '24px 0 0 24px',
      fontSize: '$lg'
  },
  '&.close': {
    transform: 'translateX(110%)',
    opacity: 0,
  },
})
export const CloseButton = styled('button', {
  display: 'flex',
  justifyContent: 'flex-end',
  border: 0,
  cursor: 'pointer',
  background: 'transparent',
  color: '$gray500',
  right: 0,
  width: '100%',
  transition: 'color 0.3s',

  '&:hover': {
    color: '$gray300'
  }
})

export const CartProducts = styled('div', {
  padding: 24,

  div: {
      display: 'flex',
      flexDirection: 'row',
      gap: '1.5rem',
      marginBottom: '0.5rem',

      span: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: 0,

        p: {
          fontSize: '$md',
           textOverflow: 'ellipsis',
        },
          span: {
          fontSize: '$md',
          fontWeight: 'bold'
        }    
      },
      '.remove-button': {
        border: 'none',
        background: 'transparent',
        padding: 0,
        margin: 0,
        height: 'auto',
        color: '$green500',
        transition: 'color 0.3s',
        fontSize: '1rem',

        '&:hover': {
          background: 'transparent',
          color: '$green300'
        }
      }
  },
  footer: {
    marginTop: '2rem',
    bottom: '0.25rem',

    '.itens': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: "space-between",
          
      p: {
        fontSize: '1rem',
      },

      span: {
        fontSize: '$md'
      },
    },
    '.values': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: "space-between",
          
      p: {
        fontSize: '$md',
        fontWeight: 'bold'
      },

      span: {
        fontSize: '$xl',
        fontWeight: 'bold'
      },
    },

    button: {
      marginTop: '2rem',
      backgroundColor: '$green500',
      border: 0,
      color: '$white',
      borderRadius: 8,
      padding: '1.25rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '$md',
      width: '100%',

      transition: 'background 0.3s',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
      },

      '&:hover': {
        backgroundColor: '$green300',
      },     
    }
  }
})

export const ImageContainer = styled('div', {
  maxWidth: 94,
  height: 94,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  
  img:{
    objectFit: 'cover',
  }
})