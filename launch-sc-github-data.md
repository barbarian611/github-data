You'll work to answer questions about repositories from [LaunchAcademy's GitHub account](https://api.github.com/orgs/LaunchAcademy/repos).

## Getting Started

```no-highlight
et get launch-sc-github-data
cd launch-sc-github-data
```

### Instructions

We have provided the data needed in the `data.js` file. While this is a lot of data, it's no different than what you've worked with in prior assignments. `data` is an array of objects, and each object contains a number of `key:value` pairs.

Notice how the data is "imported" at the top of the `github-data.js` file:

```javascript
let data = require('./data');
```

The `data` variable in `github-data.js` will contain the array defined in the `data.js` file.

### Meets Expectations Criteria
**Read the complete instructions BEFORE starting**

Write code in `github-data.js` using the `data` array to answer the following questions.

You should NOT change the code given, only complete the function bodies.

1. How many repositories does LaunchAcademy own? 
2. Which repository has the largest size? 
3. What is the most recently created repository? 
4. How many repos have `0` stargazers? 
5. Which repo has the largest number of stargazers? 
6. Return the names of the repos that have a description that is not null. 
7. Use `.map` to create an array of repository descriptions. If there is no description given, return "No description provided". 
8. Use `.map` once again to create a summary of each repository's most important information. We want to know the **name** of the repository, who created it (the **owner**), and **how many watchers** there are.
9. Return the 2 **keys** inside `monkey_party`'s license object.
10. What is `monkey_party`'s license url? 

## Sample Output

```no-highlight
1) 30

2) discourse

3) dog_park

4) 21

5) roboto

6) 
monkey_party,
booster,
roboto,
shopping_list,
invalid_html_exercise,
cathubdoghubmadebyjason,
ruby_koans,
ebert,
last_ruby_fm,
codecabulary,
signatures,
discourse,
restaurant,
sensor,
music,
payroll,
secret_santa,
korning,
next_actions,
event_tracker,
dog_park

7) List of all descriptions:
MailChimp functionality for those who like tests and HTTParty,
Rails Template,
Environment specific robots.txt for your Rails Apps,
git it?,
The root page of this application has some HTML validation errors. Clone this repo and see if you can fix them. More instructions inside Apollo under the Tools section.,
cathub_doghub,
A set of Koans to teach the Ruby language,
No description provided,
No description provided,
No description provided,
WIP - ruby client for the rotten tomatoes api,
last_ruby_fm,
Launch Academy Community Resources for Learning to Code,
No description provided,
No description provided,
No description provided,
Leave your mark!,
A platform for community discussion. Free, open, simple.,
No description provided,
What? No! You're in Paris now, baby! My town! No brother of mine eats rejecta-menta in my town!,
No description provided,
A Utility for Assembling Marketing Metrics,
Music app used for persistence challenges,
Rails app to visualize employee and sales data,
app for assigning secret santas,
Normalization Challenge,
Model Testing w/ Rails example,
exploring views rails app,
No description provided,
Solution for Dog Park checkpoint

8) Repo summaries:
"monkey_party" by LaunchAcademy has 4 watchers,
"booster" by LaunchAcademy has 44 watchers,
"roboto" by LaunchAcademy has 72 watchers,
"shopping_list" by LaunchAcademy has 0 watchers,
"invalid_html_exercise" by LaunchAcademy has 0 watchers,
"cathubdoghubmadebyjason" by LaunchAcademy has 0 watchers,
"ruby_koans" by LaunchAcademy has 0 watchers,
"issues_old" by LaunchAcademy has 0 watchers,
"smurf" by LaunchAcademy has 0 watchers,
"animal_design_patterns" by LaunchAcademy has 1 watchers,
"ebert" by LaunchAcademy has 0 watchers,
"last_ruby_fm" by LaunchAcademy has 0 watchers,
"codecabulary" by LaunchAcademy has 19 watchers,
"weather" by LaunchAcademy has 0 watchers,
"konacha_example" by LaunchAcademy has 1 watchers,
"first_program" by LaunchAcademy has 0 watchers,
"signatures" by LaunchAcademy has 0 watchers,
"discourse" by LaunchAcademy has 0 watchers,
"parking" by LaunchAcademy has 1 watchers,
"restaurant" by LaunchAcademy has 0 watchers,
"devise_example" by LaunchAcademy has 0 watchers,
"sensor" by LaunchAcademy has 1 watchers,
"music" by LaunchAcademy has 0 watchers,
"payroll" by LaunchAcademy has 0 watchers,
"secret_santa" by LaunchAcademy has 1 watchers,
"korning" by LaunchAcademy has 0 watchers,
"next_actions" by LaunchAcademy has 0 watchers,
"event_tracker" by LaunchAcademy has 0 watchers,
"weQuery" by LaunchAcademy has 0 watchers,
"dog_park" by LaunchAcademy has 0 watchers

9) id, url

10) https://api.github.com/licenses/mit
```