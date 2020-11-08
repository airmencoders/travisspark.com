FROM ruby:2.7

ARG USER_ID=1001
ARG GROUP_ID=1001

RUN addgroup --gid $GROUP_ID user
RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user

WORKDIR /opt/app
COPY . .

# RUN gem install rails bundler
RUN chown -R user:user /opt/app

USER $USER_ID
WORKDIR /opt/app

RUN bundle install
RUN jekyll build

EXPOSE 4000
 
CMD ["bundle", "exec", "jekyll", "serve", "--livereload", "--host", "0.0.0.0"]
