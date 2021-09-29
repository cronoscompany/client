export default ({ app, redirect }) => {
    if (app.$auth.loggedIn) {
        return redirect('/dashboard')
    } 
    // else if (!app.$auth.loggedIn) {
    //     return redirect('/auth/login')
    // }
}