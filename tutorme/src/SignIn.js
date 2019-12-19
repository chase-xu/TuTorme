class SignIn extends components {
    render() {
        return(
            if(this.state.signInState == false){
                return(
                  <ul class="nav justify-content-end">
                    <li className={"nav-item "} id="signIn">
                      <a className={"nav-link"} href="#" onClick={this.toggleModal.bind(this)}>Hello, Sign In Here!<span class="sr-only">(current)</span></a>
                    </li>
                  </ul>
                );
              }
              else{
                return(
                  <ul class="nav justify-content-end">
                    <li class="nav-item">
                      <a className={"nav-link"}>Welcome Back, {this.state.userEmail}</a>
                    </li>
                    <li class="nav-item" id="signIn">
                      <a className={"nav-link"} href="#" onClick={this.signOut}>Sign Out<span class="sr-only">(current)</span></a>
                    </li>
                  </ul>
                );
              }
        );
    }
}