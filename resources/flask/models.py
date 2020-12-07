from config import db

# Example model
class Example(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(60), nullable=False)
    admin = db.Column(db.Boolean(),nullable=False,default=0)

    posts = db.relationship("Post", backref="author", lazy=True)


    def __repr__(self):
        return f"User('{self.title}','{self.date_posted}')"

if __name__ == "__main__":
    # reset/empty tables
    db.drop_all()
    db.create_all()