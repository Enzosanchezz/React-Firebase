### slogans

🔴Develop using reactjs a component of type dropdown (or combobox)
🔴The project must be run in a docker container

🔴The model in firebase will consist of the following attributes:
1. name
2. business name
3. nit (cuit)
4. phone
5. code
🔴When deployed, it will consult a firebase service looking for matches according to the written text (or without a filter, in case no text has been written).

🔴Should request results paginated by 20 by 20, and should only fetch the next page when scrolling near the bottom of the current list of results.


🔴It must allow parameterizing by which attribute of the object will be searched. Parameterization should be done by code, not at runtime.

🔴 The first result of the dropdown must be a fixed option that, when clicked, raises a small pop-up, part of the component, that allows adding a new object with the text already entered, but also allowing editing before saving.

🔴Attach also within the repository, screenshots of the working solution.


### functionalities of the application

The application allows you to query a firestore database filtering by different parameters which can be chosen in a Dropdown.
It also allows you to register new companies using a form.

### start

To start using the application, it is necessary to execute the **npm install** command, then once the installation is finished, execute the **npm start** command


![image](https://user-images.githubusercontent.com/95228414/207964683-585977e9-8463-4a81-8589-880a6bb48c27.png)







