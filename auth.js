// ============================================================
//  auth.js — Demo mode: no login required
// ============================================================

const Auth = (() => {

  let _onSignedIn  = null;
  let _onSignedOut = null;

  function init(onSignedIn, onSignedOut) {
    _onSignedIn  = onSignedIn;
    _onSignedOut = onSignedOut;

    if (CONFIG.DEMO_MODE) {
      // Skip login entirely — go straight to app
      setTimeout(() => onSignedIn(), 0);
      return;
    }
  }

  function signIn()  { if (_onSignedIn)  _onSignedIn(); }
  function signOut() { if (_onSignedOut) _onSignedOut(); }
  function getToken() { return CONFIG.DEMO_MODE ? 'demo' : null; }
  function isSignedIn() { return CONFIG.DEMO_MODE; }

  return { init, signIn, signOut, getToken, isSignedIn };
})();
