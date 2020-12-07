from structures.structure_factory import StructureFactory
from settings.resources import RESOURCES

'''
some commands to consider:

react/npm/websites:

    npm init -y to get node modules (-y means you don't have to answer questions)
    npm i webpack webpack-dev-server html-webpack-plugin webpack-cli --save-dev
    >npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev


    for material icons
    
        npm install @material-ui/core --save   
        npm install @material-ui/icons 
        
    for fontawesome icons
    
      npm i --save @fortawesome/fontawesome-svg-core
      npm install --save @fortawesome/free-solid-svg-icons
      npm install --save @fortawesome/react-fontawesome
'''


def _create_app(*args, **kwargs):
    s = StructureFactory(config=RESOURCES)
    s.create_structure(**kwargs)


COMMANDS = {
    'commands': [
        {
            'name': 'react',
            'command': {
                'create-app': lambda *args, **kwargs: _create_app(*args, **kwargs, structure_name='react_app')
            }
        },
        {
            'name': 'flask',
            'command': {
                'create-app': lambda *args, **kwargs: _create_app(*args, **kwargs, structure_name='flask_app')
            }
        },
    ]

}
