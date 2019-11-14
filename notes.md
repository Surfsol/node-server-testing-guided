unit test can run every time make changes to code

end to end test not run so often

1. write a test that fails -> then test pass -> can you make it better

test back end

spin up server - hit endpoint - run test
-going to use Supertest, works with / or without jest

npm i supertest jest

- configure jest to run in node mode

in .json : test: cross-env 
    -reguardless of operating system, will allow you set some value on env. temporary

