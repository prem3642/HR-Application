import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui

import { Box } from '@mui/material';


// ----------------------------------------------------------------------


Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  

  // OR
const logo = <Box component="img" src="/static/legato_1.png" sx={{ width: 236, height: 85, ...sx }} />

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
