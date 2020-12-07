## CORS ISSUE

- when trying to access an api using react, I would get an error relating to cors. The fix for this was to 
set the response headers to something along this lines

```python
@app.route('/test_get', methods=['GET'])
def test_get():
    if request.method == 'GET':
        data = {arg: request.args.get(arg) for arg in request.args}
        print(data['name'])
        response = jsonify({'response': str(Test.query.filter_by(name=data['name']).all())})
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        response.headers.add('Access-Control-Allow-Methods', "*")
        print(response.headers)

        return response
```