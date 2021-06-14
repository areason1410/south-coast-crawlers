import gi
import requests

gi.require_version("Gtk", "3.0")
from gi.repository import Gtk, Gdk

width = 1920
height = 1080

class Window(Gtk.Window):
    def __init__(this):
        Gtk.Window.__init__(this)
        this.set_default_size(width,height)
        header = Gtk.HeaderBar(title="South Coast Crawlers")
        header.set_subtitle("Login")
        header.props.show_close_button = True
        this.set_titlebar(header)
        this.addContent();
        css_provider = Gtk.CssProvider()
        css_provider.load_from_path("./style.css")
        context = Gtk.StyleContext()
        screen = Gdk.Screen.get_default()
        context.add_provider_for_screen(screen, css_provider, Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION)


        this.show_all() 
    def addContent(this):

        container = Gtk.Box(spacing=0)
        container_con = container.get_style_context()
        container_con.add_class("container")
        grid = Gtk.Grid()

        grid.set_halign(Gtk.Align.CENTER)
        grid.set_hexpand(True)
        grid.set_vexpand(True)

        signInContainer = Gtk.VBox(spacing=6)
        signInContainer_con = signInContainer.get_style_context()
        signInContainer_con.add_class("content")

        

        title = Gtk.Label(label="Sign In")
        title_con = title.get_style_context()
        title_con.add_class("signInText")

        email = Gtk.Entry()
        email_con = email.get_style_context()
        email_con.add_class("email")
        email_con.add_class("input-field")

        password = Gtk.Entry()
        password_con = password.get_style_context()
        password_con.add_class("password")
        password_con.add_class("input-field")

        login = Gtk.Button(label="Sign In")
        login_con = login.get_style_context()
        login_con.add_class("login")

        signInContainer.pack_start(title, False, False, 5)
        signInContainer.pack_start(email, False, False, 5)
        signInContainer.pack_start(password, False, False, 5)
        signInContainer.pack_start(login, False, False, 5)

        grid.add(signInContainer)
        
        container.pack_start(grid, True, False, 0)

        this.add(container)




test = Window()
test.connect("destroy", Gtk.main_quit)
test.show_all()
Gtk.main()


