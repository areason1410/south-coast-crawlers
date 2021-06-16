import gi
gi.require_version("Gtk", "3.0")
from gi.repository import Gtk, Gdk
import db
from db import dbUrl, databaseRequest


width = 1920
height = 1080


def addStyleContext(widget, classNames):
    context = widget.get_style_context()
    if(type(classNames) == list):
        for i in range(0, len(classNames)):
            addClass(context, classNames[i])
    else:
        addClass(context, classNames)

def addClass(widgetContext, className):
    widgetContext.add_class(className)

def addBoxItems(box, widgets, spacing):
    for i in range(0, len(widgets)):
        box.pack_start(widgets[i], False, False, spacing)



class Window(Gtk.Window):
    
    def __init__(this):

        Gtk.Window.__init__(this)
        this.set_default_size(width,height)

        this.connect("destroy", Gtk.main_quit)

        header = Gtk.HeaderBar(title="South Coast Crawlers")
        header.set_subtitle("Login")
        header.props.show_close_button = True
        this.set_titlebar(header)

        this.signInPage()

        css_provider = Gtk.CssProvider()
        css_provider.load_from_path("./style.css")
        context = Gtk.StyleContext()
        screen = Gdk.Screen.get_default()
        context.add_provider_for_screen(screen, css_provider, Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION)


        this.show_all() 
        Gtk.main()

    def signInPage(this):

        #function to check wether your accounts is right
        def signInClicked(data):
            emailInput = email.get_text()
            passwordInput = password.get_text()
            res = databaseRequest(f"{dbUrl}/accounts/{emailInput}/{passwordInput}")
            print(res)

        #Create our widgets
        container = Gtk.Box(spacing=0)
        grid = Gtk.Grid()
        signInContainer = Gtk.VBox(spacing=6)
        title = Gtk.Label(label="Sign In")
        email = Gtk.Entry()
        password = Gtk.Entry()
        forgotPassword = Gtk.Label(label="Forgot Password?")
        login = Gtk.Button(label="Sign In")
        newAccountBox = Gtk.HBox(spacing=0)
        newAccount = Gtk.Label(label="Dont have an Account?")
        newAccountLink = Gtk.Label(label=" Sign Up")

        email.set_placeholder_text("Email")
        password.set_placeholder_text("Password")

        signInContainer.set_size_request(300, 0)
        email.set_size_request(0, 30)
        password.set_size_request(0, 30)
        login.set_size_request(0, 50)

        newAccountBox.set_halign(Gtk.Align.CENTER)
        forgotPassword.set_halign(Gtk.Align.END)

        login.connect("clicked", signInClicked)

        #Add our contexts for css
        addStyleContext(container, "container")
        addStyleContext(signInContainer, "content")
        addStyleContext(title, "signInText")
        addStyleContext(login, "login")
        addStyleContext(email, ["email", "input-field"])
        addStyleContext(password, ["password", "input-field"])
        addStyleContext(forgotPassword, "forgotPassword")
        addStyleContext(newAccountBox, "newAccountBox")
        addStyleContext(newAccount, "newAccount")
        addStyleContext(newAccountLink, "newAccountLink")
        
        addBoxItems(newAccountBox, [newAccount, newAccountLink], 0)
        addBoxItems(signInContainer, [title, email, password, forgotPassword, login, newAccountBox], 5)
        grid.add(signInContainer)
        container.pack_start(grid, True, False, 0)
        
        this.add(container)



