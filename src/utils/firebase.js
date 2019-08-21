import app from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
};

const devConfig = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.emailAuthProvider = app.auth.EmailAuthProvider;
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () => this.auth.signInWithRedirect(this.googleProvider);

  doSignOut = () => this.auth.signOut();

  onAuthStateChanged = (onChange, onError) =>
    this.auth.onAuthStateChanged(authUser =>
      authUser ? onChange(authUser) : onError(),
    );
}

export default Firebase;
