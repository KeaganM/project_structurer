import os
import sys

def parse_args(*args) -> dict:
    return {item.split('-')[-1]:args[index+2] for index,item in enumerate(args[1:]) if index < len(args) - 2 and '--' in item}

if __name__ == '__main__':
    # python main.py --name react --command create
    t = parse_args(*['main.py','--name','react','--command','create-app'])
    print(t)