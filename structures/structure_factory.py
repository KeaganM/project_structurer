import json
import shutil
import os

from settings.resources import RESOURCES
from mcutilize.file_ops.file_ops import get_desired_paths, create_path

"""
https://www.makeareadme.com/#mind-reading

todo: add measure to handle overwriting (i.e. set it up to check for a variable)
"""


class StructureFactory:
    def __init__(self, config=RESOURCES) -> None:
        self.config = config
        # with open(config_path, 'r') as file:
        #     self.config = json.load(file)

    def create_structure(self, output_path: str, structure_name: str = 'basic', *args, **kwargs) -> None:

        structure_type_raw = self._get_included_structure(self.config[structure_name]) if 'include' in self.config[
            structure_name].keys() else self.config[structure_name]

        root = self.config['RESOURCE_PATH']
        if '_root' in structure_type_raw.keys():
            root = f'{root}/{structure_type_raw["_root"]}'
            del structure_type_raw['_root']

        # print(structure_type_raw)
        # quit()
        # for name,content in structure_type_raw.items():
        #     self._place_file(name,content,output_path)

        structure_type = self._make_regex_ready(structure_type_raw)

        paths = get_desired_paths(root, structure_type)
        for name, content in paths.items():
            self._place_file(name, content[0], output_path)

    def _place_file(self, name: str, content: str, output_path: str) -> None:

        try:
            self._copy(content, f'{output_path}/{name}')
            # shutil.copy(content, f'{output_path}/{name}')
        except FileNotFoundError:
            create_path(f'{output_path}/{name}')
            self._copy(content, f'{output_path}/{name}')
            # shutil.copy(content, f'{output_path}/{name}')

    def _make_regex_ready(self, structure: dict) -> dict:
        return {item: r'.*{}'.format(structure[item]) for item in structure}

    def _get_included_structure(self, structure: dict) -> dict:
        # todo may have to make this recursive if included stuctures contain include as well
        for item in structure['include']:
            structure.update(self.config[item])
        structure.pop('include')
        return structure

    def _copy(self, content, output):
        if os.path.isdir(content):
            shutil.copytree(content, output)
        else:
            shutil.copy(content, output)


if __name__ == '__main__':
    s = StructureFactory(config=RESOURCES)
    s.create_structure(output_path='./test', structure_name='python_package')

