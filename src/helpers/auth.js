export const userHasScopes = (scopes) => {
  const profile = JSON.parse(localStorage.getItem('profile'));
  const grantedScopes = profile[`${process.env.AUTH0_AUDIENCE}/permissions`];
  return scopes.every(scope => grantedScopes.includes(scope));
};

export { userHasScopes as default };
