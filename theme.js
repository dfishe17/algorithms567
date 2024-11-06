import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#f0f5ff',
      }
    }
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          transform: 'translateY(-1px)',
          boxShadow: 'lg',
        },
        transition: 'all 0.2s',
      }
    },
    Container: {
      baseStyle: {
        maxW: '1200px',
      }
    }
  }
})

export default theme 