const requireAll = requireContext => requireContext.keys().map(requireContext);
const svgs = require.context("assets/svgs", false, /\.svg$/);
requireAll(svgs);