RESOURCES = {
    "RESOURCE_PATH": "resources",
    "basic": {
        "README.md": "README_template.md",
        "LICENSE": "licenses/mit_license_template"
    },
    "python_package": {
        "setup.py": "setup_template.py",
        "include": ["basic"]
    },
    # "react_app": {
    #     "_root": "react",
    #     "node_modules": "node_modules",
    #     "package.json": "package.json",
    #     "package-lock.json": "package-lock.json"
    # }
    # todo may want to add an alternative where it is a react app with the CDN instead of the modules (or both),
    #       may aslo want to consider just using the command npx create-react-app <name> since it has updated files
    #       with that you could run create-react-app and then import your own customized components
    'react_app':{
        'react_app':'react'
    },
    'flask_app': {
        'flask_app':'flask'
    }
}
