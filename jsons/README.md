# Routes

## Project

### All Projects

```
/api/projects/
```

### Lastest Projects with Limit (currently -> 30 entries)

```
/api/projects/latest
```

### One Project

```
/api/projects/:id
```

### Projects with all Categories (Overview)

Projects sorted by category where category is the main category of the project

Projects for one category are currently limited to 20

#### **Useful for the planet page!**

```
/api/projects/category/all/
```

### All Projects of one Category

includes projects where category is a subcategory

```
/api/projects/category/all/:id
```

### All projects where Category is main category

```
/api/projects/category/main/:id
```

## Category

### All Categories

```
/api/categories
```

### One Category

```
/api/categories/:id
```

### Note

There is currently an overhead of data for mostly all routes.

Once the screen design is completed, and we know which things were used in the frontend, we can minimize the load of
data.

