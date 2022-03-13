#/bin/sh

echo "What is the title of your post? "
read title

dir_name=$(echo $title | sed 's/ //g')
full_dir_name="content/blog/$dir_name"
file_name="$full_dir_name/index.md"

if [ -d "$dir_name" ]; then
  echo "Directory $dir_name already exists"

  exit 1
else
  mkdir "$full_dir_name"
fi

printf "What tags would you like to add? (separate with commas): \n"
read tags

if [ -z "$title" ]
then
  echo "You must enter a title"
  exit 1
fi

current_date=$(date +%Y-%m-%d)

touch "$file_name"
echo "---" >> "$file_name"
echo "title: $title" >> "$file_name"
echo "date: $current_date" >> "$file_name"

if [ "$tags" != "" ]
then
  echo "tags:" >> "$file_name"

  IFS=","
  for tag in $tags
  do
    printf "\t- $tag\n" >> "$file_name"
  done
fi

echo "---" >> "$file_name"
printf "\n" >> "$file_name"

printf "Created new post: $title successfully \n"
