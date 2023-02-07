#!/bin/sh

echo "What is the title of your post? "
read -r title

formatted_name=$(echo "$title" | sed 's/ //g')
file_name="src/pages/blog/$formatted_name.md"

if [ -d "$file_name" ]; then
  echo "File with name $file_name already exists"

  exit 1
fi

printf "What tags would you like to add? (separate with commas): \n"
read -r tags

if [ -z "$title" ]
then
  echo "You must enter a title"
  exit 1
fi

current_date=$(date +%Y-%m-%d)

touch "$file_name"
echo "---" >> "$file_name"
echo "layout: ../../layouts/PostLayout.astro" >> "$file_name"
echo "title: \"$title\"" >> "$file_name"
echo "date: \"$current_date\"" >> "$file_name"
echo "image:" >> "$file_name"

if [ "$tags" != "" ]
then
  echo "tags: [${tags//,/, }]" >> "$file_name"

fi
echo "---" >> "$file_name"
printf "\n\n" >> "$file_name"

printf "Created new post: $title successfully \n"

