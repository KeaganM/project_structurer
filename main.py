import sys

from commands import main as com

from settings.commands import COMMANDS


# todo add overwrite feature where is a user explicitly wants a project structure to be overwritten, it will do so

# todo add examples and keep a standard (i.e. example_****) and an option to keep those files or not

# todo for the creation of new apps we may want to offer an option to rename the folder/files to be copied over either
#   keep it as is and make changes in the resouces.py or allow it to read args (I think the latter is easier)

# todo set it up to add the create-app command automatically for a new resource added
#  (or handle all of that in a better way)

# todo it seems to pull all the paths from the resources folder, that can be an issue when we have a huge amount of paths
#   which we already do with the node modules installed in react; possibly focus in on the top level directory of the
#   items we want

# todo may also want to set it up to unpack the project files into a directory rather then create a new folder with
#   the project files

# todo may want to consider running certain commands such as npx create-react-app (or whatever) and then copy over your
#  personal files

def main(*args):
    kwargs = com.parse_args(*args)
    print(kwargs)
    for item in COMMANDS['commands']:
        if item['name'] == kwargs['name']:
            item['command'][kwargs['command']](**kwargs)


if __name__ == '__main__':
    args = sys.argv
    main(*args)

    # testing
    # main(*['main.py', '--name', 'flask', '--command', 'create-app', '--output_path', './flask_test'])
