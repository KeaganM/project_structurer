from backend.config import db

# Example model
class Test(db.Model):
    __table_args__ = {'extend_existing':True}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    color = db.Column(db.String(100),nullable=False)

    # posts = db.relationship("Post", backref="author", lazy=True)


    def __repr__(self):
        return f"User('{self.name}','{self.age}',{self.color})"

if __name__ == "__main__":
    # reset/empty tables

    data = [('Keagan',27,'Red'),('Rachel',23,'Green'),('Kristen',24,'Blue')]

    db.drop_all()
    db.create_all()

    for item in data:
        entry = Test(name=item[0],age=item[1],color=item[2])
        db.session.add(entry)
    db.session.commit()

