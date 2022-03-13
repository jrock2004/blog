#/bin/sh

echo "What is the title of your post? "
read title

dir_name=$(echo $title | sed 's/ //')

if [ -d "$dir_name" ]; then
  echo "Directory $dir_name already exists"

  exit 1
else
  mkdir ./content/blog/$dir_name
fi

printf "What tags would you like to add? (separate with commas): \n"
read tags

if [ -z "$title" ]
then
  echo "You must enter a title"
  exit 1
fi

current_date=$(date +%Y-%m-%d)

touch ./content/blog/$dir_name/index.md
echo "---" >> ./content/blog/$dir_name/index.md
echo "title: $title" >> ./content/blog/$dir_name/index.md
echo "date: $current_date" >> ./content/blog/$dir_name/index.md

if [ "$tags" != "" ]
then
  echo "tags:" >> ./content/blog/$dir_name/index.md

  IFS=","
  for tag in $tags
  do
    printf "\t- $tag\n" >> ./content/blog/$dir_name/index.md
  done
fi

echo "---" >> ./content/blog/$dir_name/index.md
printf "\n" >> ./content/blog/$dir_name/index.md

printf "Created new post: $title successfully \n"
